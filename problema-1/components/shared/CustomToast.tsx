import { toast } from 'sonner'

interface Props {
    icon?: React.ReactNode,
    message: string,
    className?: string,
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export const CustomToast = ({ icon, message, position = 'top-right', className }: Props) => {
    toast(
        <>
            {icon}
            {message}
        </>, {
        position,
        className: `${className}`
    })
}