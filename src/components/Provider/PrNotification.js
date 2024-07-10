import { Button } from "../ui/button"
import { Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "../ui/alert"
import ProviderBtn from "./ProviderBtn";




const PrNotification = (props) => {
    return (
        <div className="profile-container">
            <ProviderBtn />
            <div className="content w-full h-full relative">
                <div className="curren-content absolute flex flex-col gap-5">
                    <div className="notification">
                        <Alert className="w-11/12 h-50 ml-5 mt-5 flex justify-between">
                            <div className="flex gap-2">
                                <Terminal className="h-4 w-4" />
                                <div>
                                    <AlertTitle>Heads up!</AlertTitle>
                                    <AlertDescription>
                                        You can add components to your app using the cli.
                                    </AlertDescription>
                                </div>
                            </div>
                            <Button className="w-fit h-fit px-6 py-1">Checked</Button>
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PrNotification