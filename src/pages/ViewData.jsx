import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteRecipeAsync, FavoriteRecipeAsync, ViewRecipeAsync } from "../services/actions/SubmitAction";
import Header from "../componants/Header";
import i1 from '../images/clock.png';
import i2 from '../images/restaurant.png';
import i3 from '../images/serving-dish.png'

const ViewData = () => {

    const { recipes } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navs = [
        {
            p: '/add',
            i: 'plus-circle'
        }
    ]

    useEffect(() => {
        dispatch(ViewRecipeAsync());
    }, [])


    return (
        <>
            <Header navs={navs} />
            <Container>
                <Row className="text-center pt-5">
                    {
                        recipes.map((recipe) => {
                            return (
                                <Col key={recipe.id} md={4}>
                                    <Card className="p-3 rounded-4 shadow">
                                        <Card.Img className="rounded-3" variant="top" src={recipe.photo} />
                                        <Card.Body>
                                            <Card.Text className="text-danger">{recipe.meal}</Card.Text>
                                            <Card.Title>{recipe.name}</Card.Title>
                                            <div className="d-flex align-items-center text-secondary fw-medium my-4" style={{ fontSize: '17px' }}>
                                                {
                                                    ["prep_time", "category", "serv_size"].map((item, i) => {
                                                        return (
                                                            <Col key={item} md={4} className="d-flex align-items-center gap-2 justify-content-center">
                                                                <img style={{ width: '17px' }} src={i==0 ? i1 : i==1 ? i2 : i3} /> {recipe[item]} {i == 0 ? 'Mins' : ''}
                                                            </Col>
                                                        )

                                                    })
                                                }
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center gap-4">
                                                <Button className="btn btn-primary" onClick={() => navigate(`/edit/${recipe.id}`)}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </Button>
                                                <Button className="btn btn-danger" onClick={() => dispatch(DeleteRecipeAsync(recipe.id, 'recipes'))}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </Button>
                                                <Button className="btn btn-success" onClick={() => navigate(`/singleView/${recipe.id}`)}>
                                                    <i className="bi bi-eye-fill"></i>
                                                </Button>
                                                <Button className="btn btn-warning text-white" onClick={() => dispatch(FavoriteRecipeAsync(recipe.id))}>
                                                    <i className={`bi bi-${recipe.favorite == true ? 'star-fill' : 'star'}`}></i>
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default ViewData;