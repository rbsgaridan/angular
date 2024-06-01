import {Component} from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-org-units',
  templateUrl: './org-units.component.html',
  styleUrls: ['./org-units.component.scss'],

})
export class OrgUnitsComponent {
  data: TreeNode[] = [
    {
        label: 'Argentina',
        expanded: true,
      data: 'ar',
      styleClass: 'bg-info text-white',

        children: [
            {
                label: 'NODE!',
                expanded: true,
                data: 'ar',
                children: [
                    {
                        label: 'NODE2',
                        data: 'ar'
                    },
                    {
                        label: 'NODE3',
                        data: 'hr'
                    }
                ]
            },
            {
                label: 'NODE4',
                expanded: true,
                data: 'fr',
                children: [
                    {
                        label: 'NODE5',
                    data: 'fr',
                    expanded: true,
                    children: [
                      {
                          label: 'NODE6',
                      data: 'fr',
                      expanded: true,

                      },
                      {
                          label: 'NODE7',
                          data: 'ma',
                          children: [
                            {
                                label: 'NODE8',
                            data: 'fr',
                            expanded: true,

                            },
                            {
                                label: 'NODE9',
                                data: 'ma',

                            }
                        ]
                      }
                  ]
                    },
                    {
                        label: 'NODE10',
                        data: 'ma',

                    }
                ]
          },
          {
            label: 'NODE11',
            expanded: true,
            data: 'fr',
            children: [
                {
                    label: 'NODE12',
                data: 'fr',
                expanded: true,
                children: [
                  {
                      label: 'NODE13',
                  data: 'fr',
                  expanded: true,

                  },
                  {
                      label: 'NODE14',
                      data: 'ma',
                      children: [
                        {
                            label: 'NODE15',
                        data: 'fr',
                        expanded: true,

                        },
                        {
                            label: 'NODE16',
                            data: 'ma',

                        }
                    ]
                  }
              ]
                },
                {
                    label: 'NODE17',
                    data: 'ma',

                }
            ]
        }
        ]
    }
  ];

  zoomLevel: number = 1;

  panX: number = 0;
  panY: number = 0;
  lastPanX: number = 0;
  lastPanY: number = 0;
  isPanning: boolean = false;
  startX: number = 0;
  startY: number = 0;

  draggedNode: TreeNode | null = null;
  parentNode: TreeNode | null = null;

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.1, 3); // max zoom level of 3
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.1); // min zoom level of 0.5
  }

  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
  }

  onMouseDown(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('.node-content')) {
      return; // Don't start panning if clicking on a node
    }
    this.isPanning = true;
    this.startX = event.clientX - this.panX;
    this.startY = event.clientY - this.panY;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isPanning) return;

    const newX = event.clientX - this.startX;
    const newY = event.clientY - this.startY;

    // Debouncing the pan updates
    if (this.lastPanX !== newX || this.lastPanY !== newY) {
      this.lastPanX = newX;
      this.lastPanY = newY;

      requestAnimationFrame(() => {
        this.panX = newX;
        this.panY = newY;
      });
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isPanning = false;
  }

  dragStart(node: TreeNode) {
    this.draggedNode = node;
    this.parentNode = this.findParentNode(this.data, node);
  }

  dragEnd() {
    this.draggedNode = null;
    this.parentNode = null;
  }

  drop(event: any, node: TreeNode) {
    if (this.draggedNode && this.parentNode !== node) {
      if (!node.children) {
        node.children = [];
      }
      node.children.push(this.draggedNode);

      // Remove the node from its original parent
      if (this.parentNode) {
        this.parentNode.children = this.parentNode.children.filter(child => child !== this.draggedNode);
      }

      this.draggedNode = null;
      this.parentNode = null;
    }
  }

  findParentNode(nodes: TreeNode[], targetNode: TreeNode): TreeNode | null {
    for (const node of nodes) {
      if (node.children && node.children.includes(targetNode)) {
        return node;
      } else if (node.children) {
        const parent = this.findParentNode(node.children, targetNode);
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }


}
