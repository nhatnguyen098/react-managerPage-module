import React from 'react';

const NotFound = () => {
  return (
    <div>
      404 - Not Found
      <div className="col-md-4">
        <button
          class="btn btn-primary btn-block"
          onClick="md.showNotification('top','right')"
        >
          Top Right
        </button>
      </div>
    </div>
  );
};

export default NotFound;
