import React, { useState, useEffect } from 'react';

function InfoDetail() {
    const [backenData, setData] = useState('');
    const [listItem, setList] = useState([]);

    useEffect(() => {
        fetch("/data")
            .then((res) => res.text())
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((res) => {
                setList(res);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    console.log(backenData);
    console.log(listItem);

    return (
        <div>
            <h2>{backenData}</h2>
            <div>
                {listItem.users && Array.isArray(listItem.users) && listItem.users.length > 0 &&
                    listItem.users.map((user, index) => (
                        <p key={index}>{user}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default InfoDetail;
