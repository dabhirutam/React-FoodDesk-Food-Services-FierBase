import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../componants/Header";
import i1 from '../images/clock.png';
import i2 from '../images/restaurant.png';
import i3 from '../images/group.png';
import i4 from '../images/serving-dish.png'
import { useEffect, useState } from "react";
import { SingleRecipeAsync } from "../services/actions/SubmitAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";


const SingleViewData = () => {

    const { recipe } = useSelector((state) => state.SubmitReducer);

    const [singleRecipe, setSingleRecipe] = useState({
        name: '',
        prep_time: '',
        cook_time: '',
        serving: '',
        serv_size: '',
        description: '',
        steps: '',
        photo: ''
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
                                <div className="d-flex align-items-center column-gap-1 mt-1">
                                    {
                                        ['prep_time', 'cook_time', 'serving', 'serv_size'].map((item, index) => {
                                            return (
                                                <Col key={item}>
                                                    <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                                        <Col md={4} className="text-center">
                                                            <img style={{ width: '60%' }} src={index==0 ? i1 : index==1 ? i2 : index==2 ? i3 : i4} alt="" />
                                                        </Col>
                                                        <Col md={8}>
                                                            <h5 className="text-capitalize">{item.replace('_', ' ')}</h5>
                                                            <p className="m-0 text-secondary">{singleRecipe[item]} {index==0 || index==1 ? 'Mins' : index==2 ? 'Person' : ''}</p>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                    {/* <Col>
                                        <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                            <Col md={4} className="text-center">
                                                <img style={{ width: '60%' }} src={icon1} alt="" />
                                            </Col>
                                            <Col md={8}>
                                                <h5>Prep Time</h5>
                                                <p className="m-0 text-secondary">{singleRecipe.prep_time} Mins</p>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                            <Col md={4} className="text-center">
                                                <img style={{ width: '60%' }} src={icon2} alt="" />
                                            </Col>
                                            <Col md={8}>
                                                <h5>Cook Time</h5>
                                                <p className="m-0 text-secondary">{singleRecipe.cook_time} Mins</p>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                            <Col md={4} className="text-center">
                                                <img style={{ width: '60%' }} src={icon3} alt="" />
                                            </Col>
                                            <Col md={8}>
                                                <h5>Serving</h5>
                                                <p className="m-0 text-secondary">{singleRecipe.serving} People</p>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-flex align-items-center p-2 px-3 bg-secondary bg-opacity-10">
                                            <Col md={4} className="text-center">
                                                <img style={{ width: '60%' }} src={icon4} alt="" />
                                            </Col>
                                            <Col md={8}>
                                                <h5>Serv Size</h5>
                                                <p className="m-0 text-secondary">{singleRecipe.serv_size}</p>
                                            </Col>
                                        </div>
                                    </Col> */}
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