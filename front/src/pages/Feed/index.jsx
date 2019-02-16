import React from 'react';
import PropsTypes from 'prop-types';
import DocumentService from '../../services/Document';
import { withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

class Feed extends React.Component {
  state = {
    isLoading: true,
    documents: [],
  };

  componentDidMount() {
    DocumentService.getDocuments()
      .then(data => data.json())
      .then(documents =>
        this.setState({
          isLoading: false,
          documents: documents,
        }),
      )
      .catch(err =>
        this.setState({ isLoading: false }, () => this.handleError(err)),
      );
  }

  handleError = err => {};

  render() {
    const { classes } = this.props;
    const { isLoading, documents } = this.state;

    return (
      <div>
        {isLoading ? (
          <LinearProgress color="secondary" />
        ) : (
          documents.map(document => (
            <div key={document.id}>
              <h2>{document.title}</h2>
              <img
                style={{ width: 400, height: 300 }}
                alt="article"
                src={document.img}
              />
              <p>{document.content}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

const styles = theme => ({});

Feed.PropsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(Feed);
