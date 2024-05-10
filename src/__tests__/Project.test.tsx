import {render, screen} from "@testing-library/react";
import {Projects} from "@/pages/projects/Projects.tsx";
// import {Project} from "@/api/IfProjects.ts";

describe('Project component', () => {
    it('component is loading', async () => {
        render(<Projects />)

        // const initMockFn = jest.fn().mockRejectedValue(new Error('error'))
        const initMockFn = jest.fn().mockRejectedValue('error')
        await initMockFn();

        const loading = screen.getByText('Loading...')
        expect(loading).toBeInTheDocument();
    });
})