import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteRecipeAsync, FavoriteRecipeAsync, ViewFavoriteRecipeAsync, ViewRecipeAsync } from "../services/actions/SubmitAction";
import Header from "../componants/Header";

const FavoriteData = () => {

    const { isLoading, favorites } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navs = [
        {
            p: '/',
            i: 'house-fill'
        },
        {
            p: '/add',
            i: 'plus-circle'
        }
    ]

    useEffect(() => {
        dispatch(ViewFavoriteRecipeAsync());
    }, [])


    return (
        <>
            <Header navs={navs} />
            <Container>
                <Row className="text-center pt-5">
                    <Col md={12} className="p-4 rounded-4 border border-primary text-center">
                        <h2 className="mb-5">Favorite Recipe History</h2>
                        <div className="overflow-x-auto">
                            {
                                isLoading ?
                                    <div className="text-center">
                                        <div className="spinner-border text-info" role="status"></div>
                                    </div>
                                    :
                                    <Table bordered hover style={{ minWidth: '1000px' }}>
                                        <thead className="table-primary">
                                            <tr>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Prep Time</th>
                                                <th>Cook Time</th>
                                                <th>Serving</th>
                                                <th>Serv Size</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                favorites.map((recipe, index) => {
                                                    return (
                                                        <tr key={recipe.id}>
                                                            <td>{index + 1}</td>
                                                            <td><img style={{ height: '40px' }} src={recipe.photo} alt="" /></td>
                                                            <td>{recipe.name}</td>
                                                            <td>{recipe.prep_time}</td>
                                                            <td>{recipe.cook_time}</td>
                                                            <td>{recipe.serving}</td>
                                                            <td>{recipe.serv_size}</td>
                                                            <td>
                                                                <Button className="btn btn-danger" onClick={() => dispatch(DeleteRecipeAsync(recipe.id,'favorites'))}>
                                                                    <i className="bi bi-trash-fill"></i>
                                                                </Button>
                                                                &nbsp; || &nbsp;
                                                                <Button className="btn btn-success" onClick={() => navigate(`/singleView/${recipe.id}`)}>
                                                                <i className="bi bi-eye-fill"></i>
                                                                </Button>                
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FavoriteData;