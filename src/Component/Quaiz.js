import { useState } from "react"
import data from "./QuaizData"
import { getValue } from "@testing-library/user-event/dist/utils"
import { Box } from "@mui/material"



const Quaiz = () => {

    const [count, setCount] = useState(0)
    const [showbtnresult, setShowbtnresult] = useState(false)
    const [nextBtn, setNextBtn] = useState(true)
    const [score, setScore] = useState(0)
    const [optionclickvalue, setOptionclickvalue] = useState('')
    const [showResult, setShowResult] = useState(false)


    const handleNextbtn = () => {
        setCount(count + 1)
        setNextBtn(true)
        if (count + 1 === data.length - 1) {
            setShowbtnresult(true)
        }

        if (optionclickvalue === data[count]?.correct_answer) {
            setScore(score + 10)
        }

    }

    const openbtn = (value) => {
        setNextBtn(false)
        setOptionclickvalue(value)

    }

    const handlebtnresult = () => {
        setShowResult(true)
    }


    return (
        <div>
            {!showResult ?

                <div>
                    <h1>{`question ${count + 1} of ${data.length}`}</h1>
                    <h2>{data[count]?.question}</h2>
                    {data[count]?.options?.map((item, i) => {
                        return (
                            <div>
                                <button onClick={() => openbtn(item)}>{item}</button>
                            </div>
                        )
                    })}
                    {!showbtnresult ?
                        <button onClick={handleNextbtn} disabled={nextBtn}>next</button>
                        :
                        <button onClick={handlebtnresult} disabled={nextBtn}>result</button>
                    }
                </div>

                :
                <div>
                    <h3> score {score}</h3>
                </div>}
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}
            >
                This Box renders as an HTML section element.
            </Box>

        </div>
    )




}


export default Quaiz