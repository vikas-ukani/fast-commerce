import { AccountSidebar, Breadcrumb } from "@/components"
import { useRouter } from "next/navigation"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        <Breadcrumb />
        
        <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            <AccountSidebar />
            {children}
        </div >
    </>
}

