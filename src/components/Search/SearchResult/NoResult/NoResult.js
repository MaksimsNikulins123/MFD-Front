
const NoResult = (props) => {
    return(
            <table >
                <tbody>
                    <tr>
                        {
                            !props.errored
                                    ? 
                                    <td>
                                        {"Nav ierakstu"}
                                    </td>
                                    :
                                    <td>
                                        {"Nav atrasts"}
                                    </td>          
                        }
                        
                    </tr>
                </tbody>
            </table >
    )
}
export default NoResult;