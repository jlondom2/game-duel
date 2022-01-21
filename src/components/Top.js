import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";

const Menu = () => {
  return (
  <>

<div className="top-bar">


    <Container>
        <Row className="d-flex align-items-center">
            <div className="col-md-6">
                <p className="mb-0">Currency: <span className="text-primary">USD</span> <span class="iconify" data-icon="ep:arrow-down"></span> </p>    
            </div>   
            <div className="col-md-6">
           
                <div className="d-flex align-items-center justify-content-end">
                    <Link to="#" className="me-5">
                        <div className="d-flex align-items-center">
                        <span class="iconify" data-icon="fa-solid:user-circle"></span>
                        <span className="ms-2">Juan Londono</span>
                        </div>
                    </Link>
                    <Button variant="secondary">Logout <span class="iconify" data-icon="ant-design:logout-outlined"></span>
                     </Button>
                </div>

            </div>       
        </Row>
     
    </Container>

</div>
  </>
  );
};

export default Menu;
