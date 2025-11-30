"use client"

import { useEffect, useRef, useState } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

interface CurveDot {
  progress: number
  speed: number
  i: number
  j: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const pointsRef = useRef<Point[]>([])
  const dotsRef = useRef<CurveDot[]>([])
  const animationFrameRef = useRef<number>()
  const mountedRef = useRef(false)
  const timeRef = useRef(0)

  useEffect(() => {
    mountedRef.current = true
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!mountedRef.current) return
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
      
      // Initialize points
      if (pointsRef.current.length === 0) {
        const numPoints = 12
        pointsRef.current = Array.from({ length: numPoints }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        }))
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Helper function to get point on quadratic bezier curve
    const getPointOnCurve = (
      t: number,
      p1: Point,
      p2: Point,
      cpX: number,
      cpY: number
    ) => {
      const mt = 1 - t
      return {
        x: mt * mt * p1.x + 2 * mt * t * cpX + t * t * p2.x,
        y: mt * mt * p1.y + 2 * mt * t * cpY + t * t * p2.y,
      }
    }

    // Animation loop
    const animate = (timestamp: number) => {
      if (!mountedRef.current) return
      
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      
      ctx.clearRect(0, 0, width, height)

      const points = pointsRef.current
      const mouseInfluence = 250
      timeRef.current = timestamp

      // Update points with more noticeable movement
      points.forEach((point) => {
        // Calculate distance to mouse
        const dx = mousePos.x - point.x
        const dy = mousePos.y - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply mouse influence (repel from mouse)
        if (distance < mouseInfluence && distance > 0) {
          const force = (mouseInfluence - distance) / mouseInfluence
          const angle = Math.atan2(dy, dx)
          point.vx -= Math.cos(angle) * force * 0.3
          point.vy -= Math.sin(angle) * force * 0.3
        }

        // Add some random movement to keep things animated
        point.vx += (Math.random() - 0.5) * 0.02
        point.vy += (Math.random() - 0.5) * 0.02

        // Update position
        point.x += point.vx
        point.y += point.vy

        // Boundary collision with bounce
        if (point.x < 0 || point.x > width) {
          point.vx *= -0.9
          point.x = Math.max(0, Math.min(width, point.x))
        }
        if (point.y < 0 || point.y > height) {
          point.vy *= -0.9
          point.y = Math.max(0, Math.min(height, point.y))
        }

        // Damping (less damping = more movement)
        point.vx *= 0.995
        point.vy *= 0.995
      })

      // Store active curves and update dots
      const activeCurves: Array<{
        p1: Point
        p2: Point
        cpX: number
        cpY: number
        i: number
        j: number
      }> = []

      // Draw curved lines connecting points
      ctx.lineWidth = 2.5
      ctx.lineCap = "round"

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i]
          const p2 = points[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw lines between nearby points
          const maxDistance = 450
          if (distance < maxDistance) {
            // Calculate opacity based on distance (closer = more opaque)
            const opacity = (1 - distance / maxDistance) * 0.35
            
            // Create gradient for the line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(180, 200, 255, ${opacity * 0.9})`)
            gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`)
            
            ctx.strokeStyle = gradient

            // Control point for curve (offset perpendicular to line)
            const midX = (p1.x + p2.x) / 2
            const midY = (p1.y + p2.y) / 2
            const perpX = -dy / distance
            const perpY = dx / distance
            const curveAmount = distance * 0.5
            const cpX = midX + perpX * curveAmount
            const cpY = midY + perpY * curveAmount

            // Draw curved line using quadratic bezier
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y)
            ctx.stroke()

            // Store curve info for dots
            activeCurves.push({ p1, p2, cpX, cpY, i, j })
          }
        }
      }

      // Update and draw dots traveling along curves
      const dots = dotsRef.current
      
      // Remove dots for curves that no longer exist
      dotsRef.current = dots.filter((dot) =>
        activeCurves.some((curve) => curve.i === dot.i && curve.j === dot.j)
      )

      // Add new dots for new curves (with some randomness)
      activeCurves.forEach((curve) => {
        const hasDot = dotsRef.current.some(
          (dot) => dot.i === curve.i && dot.j === curve.j
        )
        if (!hasDot && Math.random() > 0.7) {
          dotsRef.current.push({
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.004,
            i: curve.i,
            j: curve.j,
          })
        }
      })

      // Update and draw dots
      dotsRef.current.forEach((dot) => {
        const curve = activeCurves.find(
          (c) => c.i === dot.i && c.j === dot.j
        )
        if (!curve) return

        // Update dot progress
        dot.progress += dot.speed
        if (dot.progress > 1) {
          dot.progress = 0
        }

        // Get position on curve
        const pos = getPointOnCurve(
          dot.progress,
          curve.p1,
          curve.p2,
          curve.cpX,
          curve.cpY
        )

        // Draw glowing dot with blue hue
        const gradient = ctx.createRadialGradient(
          pos.x,
          pos.y,
          0,
          pos.x,
          pos.y,
          8
        )
        gradient.addColorStop(0, "rgba(200, 220, 255, 0.9)")
        gradient.addColorStop(0.5, "rgba(150, 180, 255, 0.6)")
        gradient.addColorStop(1, "rgba(200, 220, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright center with blue hue
        ctx.fillStyle = "rgba(180, 200, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      mountedRef.current = false
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        background: "transparent",
        zIndex: -10,
      }}
    />
  )
}

