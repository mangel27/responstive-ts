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
    title: "Deposit Offer",
    text: "Get League Join offer on 1st Deposit"
    // icon: TbCricket
},
{
    title: "Signup Offer",
    text: "Get Rs 250 Discount on Registration"
    //icon: TbCricket
},
{
    title: "Refer & Earn",
    text: "Earn upto 13000 everytime you refer friend"
    // icon: TbCricket
},
{
    title: "4+1 Offer",
    text: "Join with 4 & get 5th Entry Free"
    // icon: TbCricket
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