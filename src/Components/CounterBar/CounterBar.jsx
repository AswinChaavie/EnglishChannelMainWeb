import "./CounterBar.css"
import CountIncrementer from './CountIncrementer'
export const CounterBar = () => {

    return (
        <>
            <div className='CounterBarSett'>
                <div className="CounterBarDis">
                    <div className='CounterCntntSetting'>
                        <CountIncrementer data={{ label: "Enrolled Students", number: "30000" }} />
                    </div>
                    <div className='CounterCntntSetting'>
                        <CountIncrementer data={{ label: "Affiliated Universities", number: "300" }} />
                    </div>
                </div>
                <div className="CounterBarDis">
                    <div className='CounterCntntSetting'>
                        <CountIncrementer data={{ label: "Courses", number: "356" }} />
                    </div>
                    <div className='CounterCntntSetting'>
                        <CountIncrementer data={{ label: "Satisfaction Rate", number: "300" }} />
                    </div>
                </div>

            </div>
        </>
    )
}
