/*
    userService.js

    Manages user data on client side
*/

//=============================================================================

export default {
    create,
    get,
    update,
    remove   
};

//=============================================================================

import { request } from '../common/ajaxUtils.js';
import { GregDate } from '../common/gregDate.js';

//=============================================================================

function create( data ) {
    return request( {
        method: 'POST',
        url: '/api/v1/users',
        data: data
    } );
}

//=============================================================================

function get( username ) {
    return request( {
        method: 'GET',
        url: '/api/v1/users/' + username,
        dataType: 'json'
    } )
    .then( function( user ) {
        if ( user.dateOfBirth ) {
            user.dateOfBirth = new GregDate( user.dateOfBirth );
        }
        return user;
    } );
}

//=============================================================================

function update( username, newData ) {
    return request( {
        method: 'PUT',
        url: '/api/v1/users/' + username,
        data: newData
    } );
}

//=============================================================================

function remove( username ) {
    return request( {
        method: 'DELETE',
        url: '/api/v1/users/' + username
    } );
}

//=============================================================================
