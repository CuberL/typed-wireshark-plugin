# typed-wireshark-plugin

Build your WireShark plugins (dissectors, etc.) in TypeScript with powerful types!

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/cuberl/typed-wireshark-plugin/Node.js%20Package)
![npm](https://img.shields.io/npm/v/typed-wireshark-plugin)
## Installation

`typed-wireshark-plugin` is a npm package with full typing supported for wireshark lua plugins and provide a cli tool to init your own project, just run:

```bash
mkdir foo-proto
cd foo-proto
npx typed-wireshark-plugin init
```

Then using `yarn` to install dependencies:

```bash
yarn
```

Then you can develop your own WireShark plugins now.

## Usage

![Screenshot](https://raw.githubusercontent.com/CuberL/typed-wireshark-plugin/main/.doc/screenshot.png)


Edit the file `index.ts`, you may need some knowledge about how to develop WireShark plugins. See []() to get more detail.

Example code:
``` typescript
{
    const proto_hid = Proto("foo", "Foo Protocal");
    const field_packet_header = ProtoField.uint8("foo.packet_header", "Packet Header", base.HEX);

    proto_hid.fields = [
        field_packet_header
    ];

    const dissector_data = Dissector.get('data');

    function dissector_hid (this: void, buf: Tvb, pkt: Pinfo, tree: TreeItem): boolean {
        const value_packet_header = buf(0, 1);
        if (value_packet_header.uint() != 0x7e) {
            return false
        }

        const tree_buf = tree.add(proto_hid, buf);
        pkt.cols.protocol = "HID"

        tree_buf.add(field_packet_header, value_packet_header);
        return true
    }

    proto_hid.dissector = function (buf, info, tree) {
        if (!dissector_hid(buf, info, tree)) {
            dissector_data.call(buf, info, tree)
        }
    }

    const tcp_table = DissectorTable.get('tcp.port') as DissectorTable; 
    tcp_table.add(9999, proto_hid);
}
```

Then run 

```bash
yarn build
```

You will find `index.lua` in the same directory if no error. Then you can import to your WireShark and use it!

```lua
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
do
    local proto_hid = Proto("foo", "Foo Protocal")
    local field_packet_header = ProtoField.uint8("foo.packet_header", "Packet Header", base.HEX)
    proto_hid.fields = {field_packet_header}
    local dissector_data = Dissector.get("data")
    local function dissector_hid(buf, pkt, tree)
        local value_packet_header = buf(0, 1)
        if value_packet_header:uint() ~= 126 then
            return false
        end
        local tree_buf = tree:add(proto_hid, buf)
        pkt.cols.protocol = "HID"
        tree_buf:add(field_packet_header, value_packet_header)
        return true
    end
    proto_hid.dissector = function(buf, info, tree)
        if not dissector_hid(buf, info, tree) then
            dissector_data:call(buf, info, tree)
        end
    end
    local tcp_table = DissectorTable.get("tcp.port")
    tcp_table:add(9999, proto_hid)
end
```

## Roadmap

- [x] Basic typings
- [ ] Descriptions for functions and params
- [ ] More example
- [ ] Testing

## Contributing

This project is now in very early stage. Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

@CuberL

Many thanks to [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua)

## License
[MIT](https://choosealicense.com/licenses/mit/)