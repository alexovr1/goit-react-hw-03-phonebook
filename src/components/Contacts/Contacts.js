import { Component } from 'react';
import { Label } from 'components/Form/Form.styled';
import { FindContact, DeleteBtn, Contact } from './Contacts.styled';
import PropTypes from 'prop-types';

export class Contacts extends Component {
    state = {
        filter: '',
    };

    handleFilterChange = ({ target: { value } }) => {
        this.setState({ filter: value });
    };

    render() {
        const { contacts, handleDelete } = this.props;
        const { filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        const filtredList = contacts.filter(item =>
            item.name.toLowerCase().includes(normalizedFilter)
        );
        return (
            <FindContact>
                <Label>
                    Find contacts by name
                    <input
                        type="text"
                        name="filter"
                        value={filter}
                        onChange={this.handleFilterChange}
                    />
                </Label>
                <ul>
                    {contacts.length !== 0
                        ? filtredList.map(({ id, name, number }) => (
                            <Contact key={id}>
                                {name}: {number}
                                <DeleteBtn type="button" onClick={() => handleDelete(name)}>
                                    Delete
                                </DeleteBtn>
                            </Contact>
                        ))
                        : ''}
                </ul>
            </FindContact>
        );
    }
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired).isRequired
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
};