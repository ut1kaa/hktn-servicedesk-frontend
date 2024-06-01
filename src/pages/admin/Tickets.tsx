import { useState } from 'react';
import "../../styles/pages/admin/tickets.scss"

const Tickets = () => {
    return (
        <div className="container">
            <h1>Заявки пользователей</h1>

            <div className="tickets">
                <div className="ticket">
                    <span className='color-block'></span>
                    <div className='ticket-content'>
                        <div className="up">
                            <div className="info">
                                <div className="main-info"><h2>Ошибка</h2><span>/</span> <h2>Бухгалтерский учёт</h2> </div>
                                <p>Отсутствует столбец автоматического расчета суммы заработной платы с одновременным учетом штрафов и премиальных выплат...</p>
                            </div>
                            <div className='right'>
                                <h2>Средняя</h2>
                                <h3>Ответственный:</h3>

                            </div>
                        </div>
                        <div className="down">
                            {/* <div>FILE</div> */}
                            <p>31.05.2024 17:46</p> <p>ID: 220339</p> <button>Редактировать</button> <p>До 07.06.2024 17:46</p>
                        </div>
                    </div>
                </div>
                <div className="ticket">
                    <span className='color-block'></span>
                    <div className='ticket-content'>
                        <div className="up">
                            <div className="info">
                                <div className="main-info"><h2>Ошибка</h2><span>/</span> <h2>Бухгалтерский учёт</h2> </div>
                                <p>Отсутствует столбец автоматического расчета суммы заработной платы с одновременным учетом штрафов и премиальных выплат...</p>
                            </div>
                            <div className='right'>
                                <h2>Средняя</h2>
                                <h3>Ответственный:</h3>

                            </div>
                        </div>
                        <div className="down">
                            {/* <div>FILE</div> */}
                            <p>31.05.2024 17:46</p> <p>ID: 220339</p> <button>Редактировать</button> <p>До 07.06.2024 17:46</p>
                        </div>
                    </div>
                </div>
                <div className="ticket">
                    <span className='color-block'></span>
                    <div className='ticket-content'>
                        <div className="up">
                            <div className="info">
                                <div className="main-info"><h2>Ошибка</h2><span>/</span> <h2>Бухгалтерский учёт</h2> </div>
                                <p>Отсутствует столбец автоматического расчета суммы заработной платы с одновременным учетом штрафов и премиальных выплат...</p>
                            </div>
                            <div className='right'>
                                <h2>Средняя</h2>
                                <h3>Ответственный:</h3>

                            </div>
                        </div>
                        <div className="down">
                            {/* <div>FILE</div> */}
                            <p>31.05.2024 17:46</p> <p>ID: 220339</p> <button>Редактировать</button> <p>До 07.06.2024 17:46</p>
                        </div>
                    </div>
                </div>
                <div className="ticket">
                    <span className='color-block'></span>
                    <div className='ticket-content'>
                        <div className="up">
                            <div className="info">
                                <div className="main-info"><h2>Ошибка</h2><span>/</span> <h2>Бухгалтерский учёт</h2> </div>
                                <p>Отсутствует столбец автоматического расчета суммы заработной платы с одновременным учетом штрафов и премиальных выплат...</p>
                            </div>
                            <div className='right'>
                                <h2>Средняя</h2>
                                <h3>Ответственный:</h3>

                            </div>
                        </div>
                        <div className="down">
                            {/* <div>FILE</div> */}
                            <p>31.05.2024 17:46</p> <p>ID: 220339</p> <button>Редактировать</button> <p>До 07.06.2024 17:46</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tickets;