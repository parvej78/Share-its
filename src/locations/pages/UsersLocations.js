import React from "react";
import LocationList from "../components/LocationList";
import {useParams} from "react-router-dom";
const UserLocations=()=>{
    const USER_LOCATIONS=[
        {
            id:"loc1",
            title:"Red Fort",
            desc:"The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations and attracts thousands of visitors every year.",
            pic:"https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2-686x400.jpg",
            address:"Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
            userid: "u1"
        },
        {
            id:"loc2",
            title:"Taj Mahal",
            desc:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. ",
            pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg",
            address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
            userid: "u1"
        },
        {
            id:"loc3",
            title:"Jatayu Park",
            desc:"Jatayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India.",
            pic:"https://img.traveltriangle.com/blog/wp-content/uploads/2023/01/Jatayu-cover.jpg",
            address:"Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
            userid: "u2"
        },
    ];
    const userid=useParams().userid;
    const FILTERED_LOCATIONS=USER_LOCATIONS.filter(location=>location.userid===userid)
    return <LocationList items={FILTERED_LOCATIONS}/>
    
};
export default UserLocations;