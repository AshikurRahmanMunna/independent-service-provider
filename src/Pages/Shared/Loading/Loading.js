import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
      // Loading
        <div>
            <div className="d-flex justify-content-center align-items-center">
            <Spinner
              style={{ width: "60px", height: "60px" }}
              animation="grow"
              variant="primary"
            />
          </div>
        </div>
    );
};

export default Loading;