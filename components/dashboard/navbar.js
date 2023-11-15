import {
    Navbar,
    NavbarItem,
    NavbarBrand,
    NavbarContent,
    Link,
    Input,
} from "@nextui-org/react"
import { SearchIcon } from "../icons"

const navbar = () => {
    return (
        <div className="w-full absolute top-0 ">
            <Navbar isBordered className="max-w-[1400px] px-0 p-0">
                <NavbarContent justify="start">
                    <NavbarBrand>
                        <p className="hidden sm:block font-bold text-inherit">
                            Paired
                        </p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-3">
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link
                                href="#"
                                aria-current="page"
                                color="secondary"
                            >
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Integrations
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </NavbarContent>

                <NavbarContent as="div" className="items-center" justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper:
                                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default navbar
