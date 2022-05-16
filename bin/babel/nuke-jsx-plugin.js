module.exports = function (babel) {
    var type = babel.types;
    return {
        name: "custom-jsx-plugin",
        visitor: {
            JSXText(path) {
                var stringChild = type.stringLiteral(path.node.value);
                path.replaceWith(stringChild, path.node)
            },
            JSXElement(path) {
                var openingElement = path.node.openingElement;
                var tagName = openingElement.name.name;
                var args = [type.stringLiteral(tagName), ];
                //var attribs = type.nullLiteral();
                //args.push();
                var NukeIdentifier = type.identifier("Nuke"); //object
                var RootIdentifier = type.identifier("root"); //property of object
                var callee = type.memberExpression(NukeIdentifier, RootIdentifier)
                var callExpression = type.callExpression(callee, args);
                callExpression.arguments = callExpression.arguments.concat(path.node.children);
                path.replaceWith(callExpression, path.node);
            },
        },
    };
};