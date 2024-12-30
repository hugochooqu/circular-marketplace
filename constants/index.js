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

export const avatarPlaceholderUrl =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";