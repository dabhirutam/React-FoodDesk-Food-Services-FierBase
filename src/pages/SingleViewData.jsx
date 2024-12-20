import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../componants/Header";
import i1 from '../images/clock.png';
import i2 from '../images/restaurant.png';
import i3 from '../images/french-fries.png';
import i4 from '../images/pan.png';
import i5 from '../images/group.png';
import i6 from '../images/serving-dish.png';
import { useEffect, useState } from "react";
import { SingleRecipeAsync } from "../services/actions/SubmitAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";


const SingleViewData = () => {

    const { recipe } = useSelector((state) => state.SubmitReducer);

    const [singleRecipe, setSingleRecipe] = useState({
        name: '',
        category: '',
        meal: '',
        prep_time: '',
        cook_time: '',
        serving: '',
        serv_size: '',
        description: '',
        steps: '',
        photo: '',
    })
    const navs = [
        {
            p: '/',
            i: 'house-fill'
        },
        {
            p: '/add',
            i: 'plus-circle'
        }
    ];

    const icons = [
        {
            i: i1,
            t: 'prep_time'
        },
        {
            i: i2,
            t: 'category'
        },
        {
            i: i3,
            t: 'meal'
        },
        {
            i: i4,
            t: 'cook_time'
        },
        {
            i: i5,
            t: 'serving'
        },
        {
            i: i6,
            t: 'serv_size'
        }
    ];

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SingleRecipeAsync(id));
    }, [])

    useEffect(() => {
        recipe && setSingleRecipe(recipe);
    }, [recipe])

    return (
        <>
            <Header navs={navs} />
            <Container>
                <Row>
                    <Col lg={9} xs={12} className="mt-5 mx-auto">
                        <Card className="border-0">
                            <Card.Img variant="top" src={singleRecipe.photo} />
                            <Card.Body className="p-0">
                                <div className="d-flex flex-wrap align-items-center mt-1 row-gap-1">
                                    {
                                        icons.map((item, index) => {
                                            return (
                                                <Col md={4} key={item.t} className={`${index == 1 || index == 4 ? 'px-1' : ''}`}>
                                                    <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                                        <Col md={4} className="text-center">
                                                            <img style={{ width: '60%' }} src={item.i} alt="" />
                                                        </Col>
                                                        <Col md={8}>
                                                            <h5 className="text-capitalize">{item.t.replace('_', ' ')}</h5>
                                                            <p className="m-0 text-secondary">{singleRecipe[item.t]} {index == 0 || index == 3 ? 'Mins' : index == 4 ? 'Person' : ''}</p>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </div>
                                <Card.Text className="mt-5 p-2 fs-5">{singleRecipe.description}</Card.Text>
                                <Card.Title className="p-2">Directions</Card.Title>
                                <hr className="text-danger" />
                                <Card.Text className="text-secondary p-2">{singleRecipe.steps}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleViewData;