import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { useEffect } from "react";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";


const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

        

        useEffect(() => {
            const fetchMovies = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'movies'));
        
                const recommend = [];
                const newDisney = [];
                const original = [];
                const trending = [];
        
                snapshot.forEach((doc) => {
                const data = doc.data();
                switch (data.type) {
                    case 'recommend':
                    recommend.push({ id: doc.id, ...data });
                    break;
                    case 'new':
                    newDisney.push({ id: doc.id, ...data });
                    break;
                    case 'original':
                    original.push({ id: doc.id, ...data });
                    break;
                    case 'trending':
                    trending.push({ id: doc.id, ...data });
                    break;
                    default:
                    break;
                }
                });
        
                dispatch(
                setMovies({
                    recommend,
                    newDisney,
                    original,
                    trending,
                })
                );
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
            };
        
            if (userName) {
            fetchMovies();
            }
        }, [userName]);


            

        return (
            <Container>
                <ImgSlider />
                <Viewers />
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
            </Container>
        )
    };

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

        &:after{
            background: url('/imgs/home-background.png') center center / cover no-repeat fixed;
            content: "";
            position: absolute;
            inset: 0px;
            opacity: 1;
            z-index: -1;
        }
`

export default Home;
