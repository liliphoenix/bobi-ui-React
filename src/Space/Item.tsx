import React, { useContext } from "react";
import classNames from "classnames";
import { ProviderConfig } from "bobi-ui/globalConfig/config";
import './style/item.less'
interface spaceItemProps{
    children?:React.ReactNode
}

const Item:React.FC<spaceItemProps> = (props) => {
    const {children} = props
    const {globalPrefix} = useContext(ProviderConfig)
    const prefix = globalPrefix + '-spaceItem'
    const classes= classNames(
        prefix,
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}
export default Item