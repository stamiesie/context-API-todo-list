import React, { Component } from 'react';

export default class BookList extends Component {
    render() {
        return (
            <div className='book-list'>
                <ul>
                    <li>Desert Solitaire</li>
                    <li>One Hundred Years of Solitude</li>
                    <li>East of Eden</li>
                </ul>
            </div>
        )
    }
}
