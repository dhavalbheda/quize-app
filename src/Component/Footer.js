import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Footer = ()=>{

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(<>
        <div className="row my-4">
            <div className="col-auto mx-auto">
                <h2 onClick={toggle}><i className="fa fa-user circle-icon"></i></h2>
				
                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="m-header fa-lg"><strong>About Site</strong></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-auto mx-auto text-muted">
                            <p className="font-weight-bold mb-0">Delvloped By</p>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-auto mx-auto">
                            <h3 className="dev-name"><strong>Dhaval Bheda</strong></h3>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-auto mx-auto text-muted">
                            <p className="font-weight-bold mb-0">Follow Me</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-auto mx-auto">
							<div>
								<a className="btn btn-social-icon btn-linkedin mr-1" href="http://www.linkedin.com/in/dhavalbheda"><i className="fa fa-linkedin fa-sm"></i></a>
								<a className="btn btn-social-icon btn-github mr-1" href="https://github.com/dhavalbheda"><i className="fa fa-github fa-sm"></i></a>
								<a className="btn btn-social-icon btn-pinterest mr-1" href="mailto:dhavalbhedadb@gmail.com"><i className="fa fa-envelope fa-sm"></i></a>
								<a className="btn btn-social-icon btn-google mr-1" href="https://www.instagram.com/dhaval__bheda/"><i className="fa fa-instagram fa-sm"></i></a>
								<a className="btn btn-social-icon btn-facebook mr-1" href="https://www.facebook.com/dahavl.bheda"><i className="fa fa-facebook fa-sm"></i></a>
							</div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="btn btn-primary" onClick={toggle}>Thank You</Button>{' '}
                </ModalFooter>
                </Modal>
            </div>
        </div>
    </>);
}

export default Footer;