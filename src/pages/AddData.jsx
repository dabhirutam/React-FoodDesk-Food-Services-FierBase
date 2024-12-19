import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AddRecipeAsync } from "../services/actions/SubmitAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Header from "../componants/Header";

const AddData = () => {

    const { isCreated } = useSelector((state) => state.SubmitReducer);

    const [formData, setFormData] = useState({
        name: '',
        prep_time: '',
        cook_time: '',
        serving: '',
        serv_size: '',
        description: '',
        steps: '',
        photo: '',
    });
    const navs = [
        {
            p: '/',
            i: 'house-fill'
        },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddRecipeAsync(formData));
    };

    useEffect(() => {
        if (isCreated) {
            navigate('/');
        }
    }, [isCreated]);


    return (
        <>
            <Header navs={navs}/>
            <Container>
                <Row className="justify-content-center pt-5">
                    <Col md={10} xs={12} className="border border-secondary rounded-3 p-4">
                        <h2 className="mb-4 text-center">Add Recipe Details</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3 row-gap-3">
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="text" name="name" placeholder="Enter Recipe Name" value={formData.name} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="number" name="prep_time" placeholder="Enter Prep Time" value={formData.prep_time} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="number" name="cook_time" placeholder="Enter Cook Time" value={formData.cook_time} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="text" name="serving" placeholder="Enter Serving" value={formData.serving} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                <Form.Group>
                                        <Form.Select name="serv_size"onChange={handleChange}>
                                            <option value="">Select Serv Size</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="Extra Large">Extra Large</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="text" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control type="text" name="photo" placeholder="Enter Photo URL" value={formData.photo} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows={3} type="text" name="steps" placeholder="Enter Steps" value={formData.steps} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit" className="w-100">
                                Submit Recipe
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddData;