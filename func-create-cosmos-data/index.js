module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const id = (req.query.id || (req.body && req.body.id));
    const name = (req.query.name || (req.body && req.body.name));
    const content = (req.query.content || (req.body && req.body.content));
    const likes_num = (req.query.likes_num || (req.body && req.body.likes_num));
    
    // cosmosDBにデータ格納
    context.bindings.outputDocument = JSON.stringify({
        id: id,
        name: name,
        content: content,
        likes_num: likes_num
    });
    
}