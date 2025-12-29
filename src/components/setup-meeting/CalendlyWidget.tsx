'use client'

import { InlineWidget } from 'react-calendly'
import { useEffect } from 'react'
import { events } from '@/lib/analytics'

export default function CalendlyWidget() {
    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;

    useEffect(() => {
        // Listen for Calendly events
        const handleCalendlyEvent = (e: MessageEvent) => {
            if (e.data.event && e.data.event.indexOf('calendly') === 0) {
                // Track when someone schedules an event
                if (e.data.event === 'calendly.event_scheduled') {
                    events.calendlyEventScheduled(
                        e.data.payload?.event?.name,
                        e.data.payload?.event?.uri
                    )
                }
            }
        }

        window.addEventListener('message', handleCalendlyEvent)

        return () => {
            window.removeEventListener('message', handleCalendlyEvent)
        }
    }, [])

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <InlineWidget
                url={`https://calendly.com/${username}`}
                styles={{
                    height: '700px',
                    minWidth: '320px',
                }}
            />
        </div>
    )
}
