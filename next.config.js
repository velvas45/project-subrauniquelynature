// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// module.exports = (phase) => {
//     // if (phase === PHASE_DEVELOPMENT_SERVER){
//     //     return {
//     //         env:{
//     //             DB_HOST= '127.0.0.1',
//     //             DB_USERNAME=root,
//     //             DB_PASSWORD= '',
//     //             DB_NAME=project-sun,
//     //         }
//     //     }
//     // }

//     // return {
//     //     env:{
//     //         DB_HOST='127.0.0.1',
//     //         DB_USERNAME=root,
//     //         DB_PASSWORD= '',
//     //         DB_NAME=project-sun,
//     //     }
//     // }
//     env:{
//         DB_HOST= '127.0.0.1',
//         DB_USERNAME=root,
//         DB_PASSWORD= '',
//         DB_NAME=project-sun,
//     }
// }

module.exports = {
    env:{
        DB_HOST: '127.0.0.1',
        DB_USERNAME:'root',
        DB_PASSWORD: '',
        DB_NAME:'project-sun',
        JWT_SECRET:'subra123uniqely456nature789' 
    }
}