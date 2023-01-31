import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import LangBar from '../components/LangBar'
import HomeSection from '../components/HomeSection';
import ExploreSection from '../components/ExploreSection';
import CreateSection from '../components/CreateSection';
import MatchSection from '../components/MatchSection';
import LegendsSection from '../components/LegendsSection';
import Break from '../components/Break';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <LangBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection />
            <LegendsSection />
            <ExploreSection />
            <Break />
            <CreateSection />
            <MatchSection />
        </>
    )
}

export default Home
