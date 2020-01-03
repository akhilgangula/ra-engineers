
import * as Constants from './Constants';
import { Badge } from 'react-bootstrap';
import React from 'react'
export const GetVariant = (status) => {
    switch (status.toUpperCase()) {
        case Constants.REQUEST_REJECTED:
            return Constants.DANGER
        case Constants.PRICED:
            return Constants.SUCCESS
        case Constants.REQUESTED:
            return Constants.WARNING
        case Constants.ORDERED:
            return Constants.WARNING
        case Constants.ORDER_REJECTED:
            return Constants.DANGER
        case Constants.ORDER_ACKNOWLEGDED:
            return Constants.DARK
        case Constants.IN_PROGRESS:
            return Constants.LIGHT
        case Constants.SHIPPED:
            return Constants.INFO
        case Constants.FULL_FILLED:
            return Constants.SUCCESS
        case Constants.PRICE_REJECTED:
            return Constants.DANGER
        default:
            return Constants.PRIMARY;
    }
}

export const GetBadge=(obj) => <Badge variant={GetVariant(obj.status)}>{obj.status.toUpperCase()}</Badge>
