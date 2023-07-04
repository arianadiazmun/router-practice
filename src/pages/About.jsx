import NavList from "../components/NavList";

const imgUri =process.env.PUBLIC_URL+"/images/";

export default function About () {
    return (
        <>
        <h2>About</h2>
        <NavList/>
        <img src={imgUri+"imgnigh3.webp"} alt=""/>
        </>
    );
};