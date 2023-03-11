import type { NavItem, benefitItem } from '../types/navItem';
import { TbCricket } from "react-icons/tb";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Blogs',

    },
    {
        label: 'Point System',

    },
    {
        label: 'How to Play',
    },
    {
        label: 'Offers',
    },
];
export const FANTASY_BENEFITS: Array<benefitItem> = [{
    title: "Instant Withdrawal",
    text: "Enjoy lightning fast withdrawal experience",
    icon: TbCricket
},
{
    title: "Unique Team Creation",
    text: "Now you can select only 1 player from Bat, Bwl, AllR, WK",
    icon: TbCricket
},
{
    title: "VIP",
    text: "Pay lowest entry fee & get upto 100% winnings",
    icon: TbCricket
}]
export const cardColors = [
    "green.300", "red.300", "blue.300", "yellow.300", "purple.300", "pink.300", "orange.300", "cyan.300", "teal.300", "gray.300"
]
export const FAQ_ITEMS = [
    {
        question: "What is Fantasy Cricket?",
        answer: "What is Fantasy Cricket"
    },
    {
        question: "How to play Fantasy cricket?",
        answer: "How to  play fantasy cricket"
    }
]