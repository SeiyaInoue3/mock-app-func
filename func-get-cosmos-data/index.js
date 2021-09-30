module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // cosmosDBのデータ取得
    const cosmosData = context.bindings.inputDocument;

    // httpに出力
    context.res = {
        body: cosmosData
    };

}