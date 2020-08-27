import React, {Component} from 'react';
import api from '../../../../api';
import Loading from '../../../../components/loading/Loading';
import Error from '../../../../components/error/Error';
import BadgesDetailsPage from '../BadgesDetailsPage';

export default class BadgeDetailsContainerPage extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({
        loading: false,
        error: null,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
        data: undefined,
      });
    }
  };

  handleOpenModal = () => {
    this.setState({modalIsOpen: true});
  };

  handleCloseModal = () => {
    this.setState({modalIsOpen: false});
  };

  handleDeleteBadge = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({loading: false});
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    return (
      <BadgesDetailsPage
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}
