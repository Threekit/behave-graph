import { Fiber } from '../Graphs/Execution/Fiber.js';
import { Graph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { AsyncNode } from './AsyncNode.js';
import { NodeDescription } from './Registry/NodeDescription.js';

// no flow inputs, always evaluated on startup
export class EventNode extends AsyncNode {
  public readonly evaluateOnStartup = true;
  public readonly interruptibleAsync = true;

  constructor(
    description: NodeDescription,
    graph: Graph,
    inputSockets: Socket[],
    outputSockets: Socket[],
    exec: (context: Fiber) => void
  ) {
    super(description, graph, inputSockets, outputSockets, exec);
  }
}
