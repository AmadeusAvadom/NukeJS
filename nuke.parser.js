module.exports = function (babel) {
    const { types: t } = babel;
    let paramName;
    return {
        manipulateOptions: function manipulateOptions(opts, parserOpts) {
            parserOpts.plugins.push("jsx");
        },
        name: "jsx-nuke-parser",
        visitor: {
            JSXText(path) {
                var stringChild = t.stringLiteral(path.node.value);
                path.replaceWith(stringChild, path.node)
            },
            JSXElement(path) {
                var openingElement = path.node.openingElement;
                var tagName = openingElement.name.name;
                var args = []; 
                //var attribs = type.nullLiteral();
                //args.push();
                if(tagName.charAt(0)=="A"){
                    args = [t.Identifier(tagName)];  
                }
                else {
                    args= [t.stringLiteral(tagName)];  
                }
                var NukeIdentifier = t.identifier("Nuke"); //object
                var RootIdentifier = t.identifier("createNode"); //property of object
                var callee = t.memberExpression(NukeIdentifier, RootIdentifier)
                var callExpression = t.callExpression(callee, args);
                callExpression.arguments = callExpression.arguments.concat(path.node.children);
                path.replaceWith(callExpression, path.node);
            },
        }
    };
}
