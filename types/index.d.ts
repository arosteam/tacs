export = conveyor;
declare function conveyor(): void;
export declare type Events = "add" | "end";
declare class conveyor {
  /**
   * @description {callback} - this is $lab function that will be emit when you add element or when you call next
   */
  $lab(
    callback: (element: string, index: number, remove: boolean) => any
  ): void;
  /**
   * @description go to next index
   */
  next(): Promise<void>;
  /**
   * @description {element} - add element to the conveyor {element} is an array
   */
  add(element: any): Promise<void>;
  /**
   * @description {timeout} - sleep the conveyor {timeout} milliseconds later after timeout is over it wil be next automatically
   */
  sleep(timeout: any): void;
  /**
   * @description {event} - add - end
   * @description {callback} - The events
   */
  on(event_: Events, callback: (element: string[]) => any): void;
  /**
   * @description - kill the conveyor use this if you use this you can't use next() or any other function
   */
  kill(): void;
  /**
   * @description - get Added Data or option or remove or exist
   */
  get(element: string[]): {
    added: any[];
    option: string;
    remove(): any;
    exist(): boolean;
  };
}
