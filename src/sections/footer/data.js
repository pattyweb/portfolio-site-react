import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://instagram.com/webdesignerpatricia', icon: <AiOutlineInstagram/>},
    {id: 4, link: 'https://github.com/pattyweb', icon: <AiFillGithub/>},
    {id: 5, link: 'www.linkedin.com/in/patricia-rodrigues-da-silva-5026b6187', icon: <FaLinkedinIn /> }, // LinkedIn icon
    {id: 6, link: 'https://pattyweb.com.br', icon: <AiOutlineGlobal /> },
]
