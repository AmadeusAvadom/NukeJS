import { RenderProps } from './interfaces'

const Nuke : any = {
    createNode : function(...Node){
        console.log(Node)
        return Node
    },
    render :function<RenderProps> (Element,Node) {
        let HTMLNode = document.createElement(Element[0])
        let HTMLText = document.createTextNode(Element[1])
        HTMLNode.appendChild(HTMLText)
        document.body.insertBefore(HTMLNode, Node)
        return Node
    }
}

export default Nuke;