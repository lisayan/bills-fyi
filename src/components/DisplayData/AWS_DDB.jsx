import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk';
import ReactDOM from 'react-dom';

export const setupAWSEnv = () => {
    const configuration = { 
        region: 'us-east-1',
        secretAccessKey: '', //re-add this 
        accessKeyId: 'AKIA6ODUZTKWCTGNDVLT',
    }

    AWS.config.update(configuration)
}

export const fetchData = async(tableName) => {
    setupAWSEnv()
    const docClient = new AWS.DynamoDB.DocumentClient()

    var params = {
        TableName: tableName
    }

    const scanResults = [];
    let items;
    do{
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey !== "undefined");
    
    return scanResults;
    
    // docClient.scan(params, function (err, data) {
    //     if (!err) {
    //         console.log(data)
    //         return data;
    //     } else {
    //         console.log('Cant read table')
    //         console.log(err)
    //     }
    // })
}

export default fetchData;