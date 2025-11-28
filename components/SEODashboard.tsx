"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  TrendingUp,
  TrendingDown,
  Search,
  Users,
  MousePointer,
  Clock,
  RefreshCw
} from 'lucide-react'

interface SEOMetric {
  label: string
  value: string | number
  change: number
  icon: React.ReactNode
  status: 'good' | 'warning' | 'danger'
}

export function SEODashboard() {
  const [metrics, setMetrics] = useState<SEOMetric[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  // Simulated metrics - in production, this would fetch from APIs
  useEffect(() => {
    const mockMetrics: SEOMetric[] = [
      {
        label: 'Organic Traffic',
        value: '2,847',
        change: 12.5,
        icon: <Users className="h-4 w-4" />,
        status: 'good'
      },
      {
        label: 'Keyword Rankings',
        value: 156,
        change: 8.2,
        icon: <Search className="h-4 w-4" />,
        status: 'good'
      },
      {
        label: 'Click-through Rate',
        value: '3.24%',
        change: -2.1,
        icon: <MousePointer className="h-4 w-4" />,
        status: 'warning'
      },
      {
        label: 'Core Web Vitals',
        value: 'Good',
        change: 0,
        icon: <Clock className="h-4 w-4" />,
        status: 'good'
      }
    ]

    setMetrics(mockMetrics)
    setLastUpdate(new Date())
  }, [])

  const refreshMetrics = () => {
    // In production, this would fetch fresh data
    setLastUpdate(new Date())
  }

  const getStatusColor = (status: SEOMetric['status']) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800 border-green-200'
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'danger': return 'bg-red-100 text-red-800 border-red-200'
    }
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-3 w-3 text-green-600" />
    if (change < 0) return <TrendingDown className="h-3 w-3 text-red-600" />
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">SEO Dashboard</h2>
          <p className="text-muted-foreground">
            Métricas de rendimiento SEO en tiempo real
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </span>
          <Button variant="outline" size="sm" onClick={refreshMetrics}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
              <div className="text-muted-foreground">
                {metric.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  {metric.change !== 0 && (
                    <div className="flex items-center gap-1 text-xs">
                      {getChangeIcon(metric.change)}
                      <span className={metric.change > 0 ? 'text-green-600' : 'text-red-600'}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </div>
                  )}
                </div>
                <Badge className={getStatusColor(metric.status)}>
                  {metric.status === 'good' && 'Excelente'}
                  {metric.status === 'warning' && 'Atención'}
                  {metric.status === 'danger' && 'Crítico'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Acciones SEO Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <Search className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Auditoría SEO</div>
                <div className="text-sm text-muted-foreground">Revisar estado técnico</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <TrendingUp className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Keyword Tracking</div>
                <div className="text-sm text-muted-foreground">Monitorear posiciones</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
              <Users className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Backlink Analysis</div>
                <div className="text-sm text-muted-foreground">Analizar enlaces entrantes</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
