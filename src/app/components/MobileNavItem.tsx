import { FC, useEffect, useState } from 'react'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileNavItemProps {
    itemVariants: Variants
    title: string
}

const MobileNavItem: FC<MobileNavItemProps> = ({ itemVariants, title }) => {   

    const [isUnclickable, setIsUnclickable] = useState(Boolean)
    
    const isHomeNavButton = title === 'Home'
    const isResumeNavButton = title === 'Resume'

    const pathnameRaw = usePathname()    
    const pathname = pathnameRaw.toLowerCase()


    useEffect(() => {
        if( ('/' + title.toLowerCase()) === pathname )
            setIsUnclickable(true)
        if( pathname === '/' && isHomeNavButton )
            setIsUnclickable(true)
    },)

    return (
        <Link href={ isHomeNavButton ? '/' : ( isResumeNavButton ? 'https://drive.google.com/file/d/1qq0Ugv_BOCqdK1ZLcVStps-aI0Zxis03/view?usp=sharing' : `/${title.toLowerCase()}` ) }>
            <motion.li className={isUnclickable ? 'text-slate-400 p-2 hover:cursor-default' : 'text-slate-50 p-2 hover:cursor-pointer'} whileHover={{ scale: 1.1 }} variants={itemVariants}>{title}</motion.li>
        </Link>
    )
}

export default MobileNavItem