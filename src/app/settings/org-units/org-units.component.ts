import { ToasterService } from '@abp/ng.theme.shared';
import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { OrgUnitService } from '@proxy/org-units/org-units';
import { CreateUpdateOrgUnitDto, OrgUnitDto } from '@proxy/org-units/org-units/dtos';
import { MenuItem, TreeDragDropService, TreeNode, TreeNodeDragEvent } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { debounce, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-org-units',
  templateUrl: './org-units.component.html',
  styleUrls: ['./org-units.component.scss'],
  providers: [TreeDragDropService]

})
export class OrgUnitsComponent implements OnInit {


  // data: TreeNode[] = [
  //   {
  //       label: 'Argentina',
  //       expanded: true,
  //       data: 'ar',
  //       styleClass: 'bg-info text-white',

  //       children: [
  //           {
  //               label: 'NODE!',
  //               expanded: true,
  //               data: 'ar',
  //               children: [
  //                   {
  //                       label: 'NODE2',
  //                       data: 'ar'
  //                   },
  //                   {
  //                       label: 'NODE3',
  //                       data: 'hr'
  //                   }
  //               ]
  //           },
  //           {
  //               label: 'NODE4',
  //               expanded: true,
  //               data: 'fr',
  //               children: [
  //                   {
  //                       label: 'NODE5',
  //                   data: 'fr',
  //                   expanded: true,
  //                   children: [
  //                     {
  //                         label: 'NODE6',
  //                     data: 'fr',
  //                     expanded: true,

  //                     },
  //                     {
  //                         label: 'NODE7',
  //                         data: 'ma',
  //                         children: [
  //                           {
  //                               label: 'NODE8',
  //                           data: 'fr',
  //                           expanded: true,

  //                           },
  //                           {
  //                               label: 'NODE9',
  //                               data: 'ma',

  //                           }
  //                       ]
  //                     }
  //                 ]
  //                   },
  //                   {
  //                       label: 'NODE10',
  //                       data: 'ma',

  //                   }
  //               ]
  //         },
  //         {
  //           label: 'NODE11',
  //           expanded: true,
  //           data: 'fr',
  //           children: [
  //               {
  //                   label: 'NODE12',
  //               data: 'fr',
  //               expanded: true,
  //               children: [
  //                 {
  //                     label: 'NODE13',
  //                 data: 'fr',
  //                 expanded: true,

  //                 },
  //                 {
  //                     label: 'NODE14',
  //                     data: 'ma',
  //                     children: [
  //                       {
  //                           label: 'NODE15',
  //                       data: 'fr',
  //                       expanded: true,

  //                       },
  //                       {
  //                           label: 'NODE16',
  //                           data: 'ma',

  //                       }
  //                   ]
  //                 }
  //             ]
  //               },
  //               {
  //                   label: 'NODE17',
  //                   data: 'ma',

  //               }
  //           ]
  //       }
  //       ]
  //   }

  // ];

  @Input() treeData: TreeNode<OrgUnitDto>[] = [];
  orgUnits: OrgUnitDto[] = [];

  zoomLevel: number = 1;

  panX: number = 0;
  panY: number = 0;
  lastPanX: number = 0;
  lastPanY: number = 0;
  isPanning: boolean = false;
  startX: number = 0;
  startY: number = 0;
  items: MenuItem[];

  draggedNode: TreeNode | null = null;
  parentNode: TreeNode | null = null;
  @ViewChild('tree') tree: Tree;

  constructor(
    private _orgUnitsService: OrgUnitService,
    private _toastr: ToasterService,
    private cdr: ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this._orgUnitsService.getFullOrgTree().subscribe(data => {
      this.orgUnits = [data];
      this.treeData = this.orgUnits.map(mapOrgUnitToTreeNode);
      console.log('Mapped Tree Data --->',this.treeData);
    })
      ;

      this.items = [
        { label: 'View', icon: 'pi pi-search', command: (event) => console.log('View Command') },
        { label: 'Unselect', icon: 'pi pi-times', command: (event) => console.log('Unselected') }
    ];
  }


  // zoomIn() {
  //   this.zoomLevel = Math.min(this.zoomLevel + 0.1, 3); // max zoom level of 3
  // }

  // zoomOut() {
  //   this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.1); // min zoom level of 0.5
  // }

  // onScroll(event: WheelEvent) {
  //   if (event.deltaY > 0) {
  //     this.zoomOut();
  //   } else {
  //     this.zoomIn();
  //   }
  // }

  // onMouseDown(event: MouseEvent) {
  //   if ((event.target as HTMLElement).closest('.node-content')) {
  //     return; // Don't start panning if clicking on a node
  //   }
  //   this.isPanning = true;
  //   this.startX = event.clientX - this.panX;
  //   this.startY = event.clientY - this.panY;
  // }

  // onMouseMove(event: MouseEvent) {
  //   if (!this.isPanning) return;

  //   const newX = event.clientX - this.startX;
  //   const newY = event.clientY - this.startY;

  //   // Debouncing the pan updates
  //   if (this.lastPanX !== newX || this.lastPanY !== newY) {
  //     this.lastPanX = newX;
  //     this.lastPanY = newY;

  //     requestAnimationFrame(() => {
  //       this.panX = newX;
  //       this.panY = newY;
  //     });
  //   }
  // }

  // onMouseUp(event: MouseEvent) {
  //   this.isPanning = false;
  // }

  // dragStart(node: TreeNode) {
  //   this.draggedNode = node;
  //   this.parentNode = this.findParentNode(this.treeData, node);
  // }

  // dragEnd() {
  //   this.draggedNode = null;
  //   this.parentNode = null;
  // }

  accessTreeNodes() {
    if (this.tree) {
      const nodes = this.tree.value;
      console.log('Accessed Tree Nodes:', nodes);
    }
  }

  onClick(event: any, node:TreeNode) {
    console.log('Clicked NODE -->>>',safeStringify(node));
    const draggedNode = this.findNodeByKey(this.treeData, node.key);
    console.log('FROM TreeNode --->>> ',safeStringify(draggedNode));
  }

  drop(event: any) {
    // this.accessTreeNodes();
    // const draggedNode = this.findNodeByKey(this.tree.value, event.dragNode.key);
    setTimeout(() => {
      console.log('DroppedNode >>>', safeStringify(event.dragNode));
      const droppedNode: TreeNode = event.dropNode;
      const draggedNode: TreeNode = event.dragNode;

      const orgUnitParent: OrgUnitDto = droppedNode.data;
      const orgUnitForUpdate: OrgUnitDto = draggedNode.data;

      const requestBody: CreateUpdateOrgUnitDto = { orgUnitTypeId: orgUnitForUpdate.orgUnitTypeId, orderNumber: 1 };

      if (draggedNode.parent.key == droppedNode.key) {
        orgUnitForUpdate.parentUnitId = orgUnitParent.id;
        orgUnitForUpdate.path = orgUnitParent.path + '/' + orgUnitForUpdate.code;
      } else {
        orgUnitForUpdate.orderNumber = event.index;
        orgUnitForUpdate.parentUnitId = orgUnitParent.parentUnitId;
        orgUnitForUpdate.path = droppedNode.parent.data.path + '/' + orgUnitForUpdate.code;
      }
      Object.assign(requestBody, orgUnitForUpdate);

      requestBody.orderNumber = droppedNode.children.length;
      console.log(requestBody);
      // call the update api
      this._orgUnitsService.update(draggedNode.data.id, requestBody)
        .subscribe({
          complete: () => {
            this._toastr.success('Updated', requestBody.unitName);
          },
          error: (err) => {
            this._toastr.error('Error', err.message);
          }
        });


    }, 1000)



    // orgUnitForUpdate.parentUnitId = orgUnitParent.id;
    // orgUnitForUpdate.path = orgUnitParent.path + '/' + orgUnitForUpdate.code;
    // const requestBody: CreateUpdateOrgUnitDto = { orgUnitTypeId: orgUnitForUpdate.orgUnitTypeId, orderNumber: 1};
    // Object.assign(requestBody, orgUnitForUpdate);
    // requestBody.orderNumber = droppedNode.children.length;
    // console.log(requestBody);
    // call the update api
    // this._orgUnitsService.update(draggedNode.data.id, Object.assign({}, draggedNode.))
    // for org chart
    // if (this.draggedNode && this.parentNode !== node) {
    //   if (!node.children) {
    //     node.children = [];
    //   }
    //   node.children.push(this.draggedNode);

    //   // Remove the node from its original parent
    //   if (this.parentNode) {
    //     this.parentNode.children = this.parentNode.children.filter(child => child !== this.draggedNode);
    //   }

    //   this.draggedNode = null;
    //   this.parentNode = null;
    // }
  }

  // findParentNode(nodes: TreeNode[], targetNode: TreeNode): TreeNode | null {
  //   for (const node of nodes) {
  //     if (node.children && node.children.includes(targetNode)) {
  //       return node;
  //     } else if (node.children) {
  //       const parent = this.findParentNode(node.children, targetNode);
  //       if (parent) {
  //         return parent;
  //       }
  //     }
  //   }
  //   return null;
  // }

  findNodeByKey(nodes: TreeNode[], key: string): TreeNode | null {
    for (const node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const foundNode = this.findNodeByKey(node.children, key);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null;
  }

}

function mapOrgUnitToTreeNode(orgUnit: OrgUnitDto): TreeNode<OrgUnitDto> {
  const { children, ...orgUnitDataWithoutChildren } = orgUnit;

  return {
    key: orgUnit.code,
    label: orgUnit.unitName,
    expanded: true,
    icon: getIconForOrgType(orgUnit.orgUnitTypeId),
    data: orgUnitDataWithoutChildren as OrgUnitDto,
    children: orgUnit.children ? orgUnit.children.map(mapOrgUnitToTreeNode) : []
  };
}

function getIconForOrgType(id: number): string {
  switch (id) {
    case 1:
      return 'fa fa-institution';
      case 2:
      return 'fa fa-graduation-cap';
    case 3:
      return 'fa fa-building';
    case 4:
      return 'fa fa-building-o';
    case 5:
      return 'fa fa-users';
    case 6:
      return 'fa fa-briefcase';

  }
}

function safeStringify(obj: any, depth = 2) {
  const seen = new WeakSet();
  function stringifyHelper(value: any, currentDepth: number): any {
      if (currentDepth > depth) {
          return '[Depth limit reached]';
      }
      if (value !== null && typeof value === 'object') {
          if (seen.has(value)) {
              return '[Circular]';
          }
          seen.add(value);
          if (Array.isArray(value)) {
              return value.map(item => stringifyHelper(item, currentDepth + 1));
          } else {
              const result: any = {};
              for (const key in value) {
                  if (Object.prototype.hasOwnProperty.call(value, key)) {
                      result[key] = stringifyHelper(value[key], currentDepth + 1);
                  }
              }
              return result;
          }
      }
      return value;
  }
  return JSON.stringify(stringifyHelper(obj, 0), null, 2);
}
