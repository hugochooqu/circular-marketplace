import { FaHome, FaQuestionCircle, FaSignInAlt } from "react-icons/fa";

export const headerItems = [
    {
        name: 'Homepage',
        icon: <FaHome />,
        url: '/'
    },
    {
        name: 'How it works',
        icon: <FaQuestionCircle />,
        url: '/how-it-works'
    },
    {
        name: 'LOGO',
        url: ''
    },
    {
        name: 'Sign Up',
        icon: <FaSignInAlt />,
        url: '/sign-up'
    },
    {
        name: 'Sign In',
        icon: <FaSignInAlt />,
        url: '/sign-in'
    }

]