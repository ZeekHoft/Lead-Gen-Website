import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { LucideIcon, Sparkles, Zap, Handshake, MonitorSmartphone, Drama, UserPen, Headset } from 'lucide-react'
import { ReactNode } from 'react'

interface Contents {
    title: string,
    context: string,
    icon: LucideIcon
}


function ServicesCard({ title, context, icon: Icon }: Contents) {
    return (
        <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
                <CardDecorator>
                    <Icon
                        className="size-12"
                        strokeWidth={1.5}
                        aria-hidden
                    />
                </CardDecorator>

                <h3 className="mt-6 font-medium">{title}</h3>
            </CardHeader>

            <CardContent>
                <p className="text-sm">{context}</p>
            </CardContent>
        </Card>
    );
}



export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">

                    <ServicesCard
                        icon={Sparkles}
                        title='Lead Generation'
                        context='Multi-Channel Outreach. A mix of email, calls, and social
                            platforms that converts. We provide targeted strategies
                            to attract qualified leads, fill your sales pipeline, and drive
                            consistent business growth.
                            ' />

                    <ServicesCard
                        icon={MonitorSmartphone}
                        title='Social Media Management'
                        context='Providing full-service management of your social
                        platforms—creating content, scheduling posts, and
                        engaging with your audience' />


                    <ServicesCard
                        icon={Drama}
                        title='Content Creation'
                        context='Creating high-quality visual and written content that tells
                        your brand story and supports marketing goals.' />
                    <ServicesCard
                        icon={UserPen}
                        title='Lead Profiling'
                        context='We deliver lead lists customized to match your ideal customer profile.
' />
                    <ServicesCard
                        icon={Handshake}
                        title='Executive Assistance'
                        context='We provide reliable administrative support to help executives stay
                focused, organized, and efficient.' />
                    <ServicesCard
                        icon={Headset}
                        title='Customer Service Rep'
                        context='We provide support that enhances client satisfaction, addresses their
                    needs, and builds strong, long-term relationships.' />


                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-50 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-90"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-20 items-center justify-center border-l border-t">{children}</div>
    </div>
)
